import './Intro.css';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">The Blog Store </h2>
          <h1 className="i-name">UMKM Indonesia</h1>
          <p className="i-desc">
          UMKM is an abbreviation of Micro, Small and Medium Enterprises. Basically, UMKM is the meaning of business or business carried out by individuals, groups, small business entities, and households. Indonesia as a developing country makes UMKM the main foundation of the community's economic sector, this is done to encourage the ability to develop independence in society, especially in the economic sector.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src='https://img00.deviantart.net/da8d/i/2016/191/0/1/store_clipart__by_amberjackson-da9g6ng.png' alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
