function testMac(): boolean {
  // Modern approach: User-Agent Client Hints
  if (navigator.userAgent) {
    return (
      navigator.userAgent.includes("Macintosh") ||
      navigator.userAgent.includes("Mac OS X")
    );
  }

  // Fallback: Check platform
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
}

function testWindows(): boolean {
  // Modern approach: User-Agent Client Hints
  if (navigator.userAgent) {
    return (
      navigator.userAgent.includes("Windows NT") ||
      navigator.userAgent.includes("Win64")
    );
  }

  // Fallback: Check platform
  return navigator.platform.toUpperCase().indexOf("WIN") >= 0;
}

function testLinux(): boolean {
  // Modern approach: User-Agent Client Hints
  if (navigator.userAgent) {
    return (
      navigator.userAgent.includes("Linux") ||
      navigator.userAgent.includes("X11")
    );
  }

  // Fallback: Check platform
  return navigator.platform.toUpperCase().indexOf("LINUX") >= 0;
}

export function useDevice() {
  const isMac = testMac();
  const isWindows = testWindows();
  const isLinux = testLinux();
  return { isMac, isWindows, isLinux };
}
