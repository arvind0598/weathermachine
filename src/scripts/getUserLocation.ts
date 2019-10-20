const getUserLocation = (success: PositionCallback, error: PositionErrorCallback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  return null;
};

export default getUserLocation;
