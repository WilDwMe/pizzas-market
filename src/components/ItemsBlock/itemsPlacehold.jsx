import ContentLoader from 'react-content-loader';

export const Loader = () => {
return(
  <ContentLoader 
  speed={1}
  width={280}
  height={458}
  viewBox="0 0 280 458"
  backgroundColor="#ffffff"
  foregroundColor="#fefce1"
>
  <rect x="-4" y="-2" rx="0" ry="0" width="260" height="229" /> 
  <rect x="-4" y="236" rx="0" ry="0" width="260" height="34" /> 
  <rect x="-4" y="278" rx="0" ry="0" width="260" height="50" />
</ContentLoader>
  )
};