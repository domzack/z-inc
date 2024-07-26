$(document).ready(function () {
    console.log('raw/app.nanonet.v1.js loaded!')
    console.log({ comandos });
})

const comandos = [
    {
        cmd: 'cmd',
        description: 'description',
        help: 'help',
        return: 'return'
    },
    {
        cmd: 'VER',
        description: 'Retorna versao do firmware',
        help: 'VER',
        return: 'Version'
    },
    {
        cmd: 'STATUS',
        description: 'Retorna status do dispositivo',
        help: 'STATUS',
        return: 'status'
    },
    {
        cmd: 'SM',
        description: 'Seta Modo Operacao. 0.: PULSADOR; 1.: PORTARIA',
        help: 'Use SM.0, SM.1',
        return: 'Value of SM'
    },
    {
        cmd: 'SF',
        description: 'Seta Tempo Verificacao Sensor FECHAMENTO',
        help: 'Use SF.0 (0 segundos), SF.25 (2.5 segundos), SF.50 (5.0 segundos)',
        return: 'Value of SM'
    },
]