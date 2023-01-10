import './About.css';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src='https://th.bing.com/th/id/R.e72fbc812c5ecbd426337adef8196ac6?rik=8rxlZO5PR%2b7uUA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-YPAf5Fia_gY%2fUZC_g7Nj9GI%2fAAAAAAAAAeM%2fCPpricFmloE%2fs1600%2fbali.jpg&ehk=kVthO7rEa9ZbCL2oB4%2fRmIh8MeS0SdTj0ZibPLUYy2Y%3d&risl=&pid=ImgRaw&r=0'
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-award-title">About Bali Island</h1>
        <p className="a-desc">
        Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. It owns the panorama and unique culture that make this island is exclusive than others. Furthermore, It’s location is in the tropical situation as Dream Island for a vacation. Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people. Moreover, the local people present daily community ritual and a lot of things make your holiday unforgettable. In Bali, the spirits are coming out to play in the moonlight. You can discover a festival and even a funeral on the island. Meanwhile, a good time of the day with a sea breeze will complete your holiday dream.
        </p>
        <div className="a-award">
          <img src='https://godongijo.com/wp-content/uploads/2019/01/tarik-kecak.jpeg' alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Tari Kecak</h4>
            <p className="a-award-desc">
                Kecak dance is one of the famous Indonesian dances originating from Bali. This dance art is usually performed en masse by dozens or even hundreds of male dancers who sit in a circular pattern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;