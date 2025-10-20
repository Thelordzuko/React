import myImage from './assets/picture.jpg';

function Profile() {
    return(
        <div class="main">
        <div>
            <img src={myImage} alt="Oluwaseyi Alebiosu" />
            <h2>Oluwaseyi Alebiosu</h2>
            <h3>Student Developer</h3>
            <p>As an AI developer, I aim to use my skills to forge a new and innovative path in the field of tech.</p>
        </div>
        <div>
            <img src="https://i.pinimg.com/1200x/70/b5/dd/70b5dd2a5af74fdce0adf146fe9116fc.jpg" alt="image" /> 
            <h2>Tunde Onakoya</h2>
            <h3>Guiness World Record Holder</h3>
            <p>Nigerian chess master and humanitarian best known for founding Chess in Slums Africa</p>
        </div>
        </div>
    );
}

export default Profile;