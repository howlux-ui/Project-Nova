function login(username, password) {
  if (!username || !password) {
    return { success: false, message: "Missing credentials" };
  }
  return { success: true, message: "Login successful" };
}

module.exports = { login };
