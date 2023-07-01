import Gallery from "../components/Gallery";
import "./HomePage.scss";

function HomePage() {
  const imgGallery = [
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    },
    {
      img: "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=",
    },
    {
      img: "https://cdn0.weddingwire.com/article/0692/3_2/960/jpg/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg",
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/camerapress-03616268-web-1531690614.jpg",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    },
    {
      img: "https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2019/11/GettyImages-1303804580.jpg?quality=75&strip=all",
    },
    {
      img: "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=",
    },
    {
      img: "https://cdn0.weddingwire.com/article/0692/3_2/960/jpg/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg",
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/camerapress-03616268-web-1531690614.jpg",
    },
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    },
    {
      img: "https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2019/11/GettyImages-1303804580.jpg?quality=75&strip=all",
    },
    {
      img: "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=",
    },
    {
      img: "https://cdn0.weddingwire.com/article/0692/3_2/960/jpg/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg",
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/camerapress-03616268-web-1531690614.jpg",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://www.brides.com/thmb/n6vfdnpG-0lctwOJitGd5tNKWp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-740658be0504413a8a77d501ba133df6.jpg",
    },
    {
      img: "https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2019/11/GettyImages-1303804580.jpg?quality=75&strip=all",
    },
    {
      img: "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=",
    },
    {
      img: "https://cdn0.weddingwire.com/article/0692/3_2/960/jpg/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg",
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/camerapress-03616268-web-1531690614.jpg",
    },
  ];

  return (
    <div className="nice-color">
    {/* <h2>Tine minte momentele importante din viata ta!</h2> */}
      <Gallery imgGallery={imgGallery} />
    </div>
  );
}
export default HomePage;
