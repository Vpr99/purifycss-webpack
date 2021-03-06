function parseEntryPaths(paths) {
  const ret = paths || [];

  // Convert possible string to an array
  if (typeof ret === 'string') {
    return [ret];
  }

  return ret;
}

function parseEntries(paths, chunkName) {
  if (Array.isArray(paths)) {
    return paths;
  }

  if (!(chunkName in paths)) {
    return [];
  }

  const ret = paths[chunkName];

  return Array.isArray(ret) ? ret : [ret];
}

module.exports = {
  entryPaths: parseEntryPaths,
  entries: parseEntries
};
