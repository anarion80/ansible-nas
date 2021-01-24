<?php
/* Override Servers array */
$cfg['blowfish_secret'] = '{{ lookup('password', '/dev/null length=32') }}"';
$cfg['AllowArbitraryServer'] = true;
$cfg['Servers'] = [
{% for item in outcome.results %}
{% if item.exists is defined %}
    {{ loop.index }} => [
        'auth_type' => 'cookie',
        'host' => '{{ item.container.NetworkSettings.IPAddress }}',
        'port' => 3306,
        'username' => '',
        'password' => '',
        'verbose' => '{{ item.item }}',
    ],
{% endif %}
{% endfor %}
];
