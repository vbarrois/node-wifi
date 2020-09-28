const command = config => {
  const args = [
    'device',
    'wifi',
    'rescan'
  ];

  if (config.iface) {
    args.push('ifname');
    args.push(config.iface);
  }

  return {
    cmd: 'nmcli',
    args
  };
};

module.exports = command;
