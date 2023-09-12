const youtubeVideoGroupsRegex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

const getIdFromYoutubeVideo = (videoUrl: string) => videoUrl.match(youtubeVideoGroupsRegex)[1];

const getYoutubePreviewImage = (videoUrl: string) => {

  let videoID = getIdFromYoutubeVideo(videoUrl);

  return {
    'sm': 'https://img.youtube.com/vi/' + videoID + '/default.jpg',
    'md': 'https://img.youtube.com/vi/' + videoID + '/mddefault.jpg',
    'lg': 'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg',
  };
};

const getYoutubeEmbed = (videoUrl: string) => {
  return 'https://www.youtube.com/embed/' + getIdFromYoutubeVideo(videoUrl);
};

export {
  getYoutubeEmbed, getYoutubePreviewImage
};
