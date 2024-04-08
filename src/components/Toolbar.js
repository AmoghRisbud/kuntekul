import Mahalaxmi from '../assets/Mahalaxmi.jpg';
import Parshuram from '../assets/Parshuram.jpg';
import Yogeshwari from '../assets/Yogeshwari.jpg';
import Adityanath from '../assets/Adityanath.jpg'
function Toolbar() {
  return (
    <div className="flex  flex-col w-80 flex-nowrap justify-evenly">
      <img
        class="h-40 bg-cover w-40 "
        src={Parshuram}
        alt=" description"
      />
      <img
        class="h-40 bg-cover w-40 max-w-xs"
        src={Adityanath}
        alt=" description"
      />
      <img
        class="h-40 bg-cover w-40 max-w-xs"
        src={Yogeshwari}
        alt=" description"
      />
      <img
        class="h-40 bg-cover w-40 max-w-xs"
        src={Mahalaxmi}
        alt=" description"
      />
    </div>
  );
}

export default Toolbar;
