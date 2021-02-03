#!/bin/bash
# Runs Restic backup on a schedule via cron, emails with status
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
FROM="restic@{{ ansible_nas_domain }}"
EMAIL="{{ ansible_nas_email }}"
LOG="/var/log/restic.log"
RDIR="/root/restic"

### keep last # of days of snapshots
KEEPDAYS=10

log() { 
    echo -e "$(date "+%m%d%Y_%H%M%S"): ${1}" | tee -a $LOG
}

notify() {
    echo -e "${1}" | mail -r "${FROM}" -s "Errors running Restic Backup on host: $(hostname)" "$1"
}

cd $RDIR

echo -e "\n" | tee -a $LOG

if [ ! -f restic.keys ]
then
	log "${RDIR}/restic.keys file not present, exiting..\n\n"
	exit 1
fi

source ${RDIR}/restic.keys

log "starting backup.."

#msg=$(restic backup --files-from=include --exclude-file=exclude >> $LOG 2>&1)
msg=$(restic -r $RESTIC_REPOSITORY -o rclone.args="serve restic --stdio --b2-hard-delete --drive-impersonate anarion@anarion.pl" backup --files-from=include --iexclude-file=exclude >> $LOG 2>&1)


if [ $? -eq 1 ]
then
    notify "[restic backup]\n${msg}" $EMAIL
    log "${msg}\n-----------------------------------------"
    exit 1
fi

log "checking for errors.."

msg=$(restic -r $RESTIC_REPOSITORY -o rclone.args="serve restic --stdio --b2-hard-delete --drive-impersonate anarion@anarion.pl" check >> $LOG 2>&1)

# Check for Errors
if [ $? -eq 1 ]
then
    notify "[restic -r $RESTIC_REPOSITORY -o rclone.args="serve restic --stdio --b2-hard-delete --drive-impersonate anarion@anarion.pl" check]\n${msg}" $EMAIL
    log "${msg}\n--------------------------------------"
    exit 1
fi


log "removing old snapshots.."

msg=$(restic -r rclone:gsuite_sa:restic_backups -o rclone.args="serve restic --stdio --b2-hard-delete --drive-impersonate anarion@anarion.pl" forget --keep-daily ${KEEPDAYS} --prune)

if [ $? -eq 1 ]
then
    notify "[restic forget]\n${msg}" $EMAIL
    log "${msg}"
    exit 1
fi


log "end of run\n-----------------------------------------\n\n"

# notify OK
echo -e "Snapshot complete, snapshots older than $KEEPDAYS days deleted." | mail -r "${FROM}" -s "Restic Backup OK on: $(hostname)" ${EMAIL}
