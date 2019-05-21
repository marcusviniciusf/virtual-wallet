const Storage = {
  sessionSet: (key, value) => sessionStorage.setItem(key, value),
  sessionGet: key => sessionStorage.getItem(key),
  localSet: (key, value) => localStorage.setItem(key, value),
  localGet: key => localStorage.getItem(key),
};

export default Storage;
