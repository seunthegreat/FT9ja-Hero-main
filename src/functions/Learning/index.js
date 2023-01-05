export const completedVideosId = (userProgress) => {
  const completed = [];
  for ( let i = 0; i < userProgress.length; i++) {
    if (userProgress[i].status === 100) completed.push(userProgress[i])
  }
    return completed;
};
  
export const videosInProgressId = (userProgress) => {
  const inProgress = [];
    for (let i = 0; i < userProgress.length; i++ ){
      if (userProgress[i].status > 0 && userProgress[i].status < 100) inProgress.push(userProgress[i])
    }
  return inProgress;
};
  
export const completedId = completedVideosId(userProgress);
export const inProgressId = videosInProgressId(userProgress);
  
export const getCompletedVideos = (completedId, forexVideos) => {
  //--Create a Set of the video IDs of the completed videos--//
  const completedVideoIds = new Set(completedId.map(video => video.id));
  //--Filter the allVideos array to return a new array with only the completed videos--//
  return forexVideos.filter(video => completedVideoIds.has(video.id));
};
  
export const getVideosInProgress = (inProgressId, forexVideos) => {
  //--Create a Set of the video IDs of the videos in progress--//
  const videosInProgressId = new Set(inProgressId.map(video => video.id));
  //--Filter the allVideos array to return a new array with only the completed videos--//
  return forexVideos.filter(video => videosInProgressId.has(video.id));
};