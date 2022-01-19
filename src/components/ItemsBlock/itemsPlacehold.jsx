import ContentLoader from 'react-content-loader';

const Loader = () => {
return(
  <ContentLoader 
      speed={1}
      width={280}
      height={458}
      viewBox="0 0 280 458"
      backgroundColor="#d1d1d1"
      foregroundColor="#a1a3de">
      <rect x="-4" y="-2" rx="0" ry="0" width="260" height="229" /> 
      <rect x="-4" y="236" rx="0" ry="0" width="260" height="34" /> 
      <rect x="-4" y="278" rx="0" ry="0" width="260" height="50" />
    </ContentLoader>
  )
};

export default Loader;