const command = require('../command');

describe('linux rescan command', () => {
  it('should generate basic command without iface', () => {
    expect(command({ iface: null })).toEqual({
      cmd: 'nmcli',
      args: [
        'device',
        'wifi',
        'rescan'
      ]
    });
  });

  it('should generate basic command with iface', () => {
    expect(command({ iface: 'wlan0' })).toEqual({
      cmd: 'nmcli',
      args: [
        'device',
        'wifi',
        'rescan',
        'ifname',
        'wlan0'
      ]
    });
  });
});
