module.exports = () => {
  return (value) => {
    if (value & 1) {
      return { status: false, number: value };
    } else {
      return { status: true, number: value };
    }
  };
}
