import React, { useState } from "react";
import jsonData from "../assets/Constants.json";
import Modal from "./Modal"; 
import "./styles.css"; // Import your CSS file
const Navbar = ({ onPageChange }) => {
const handleClick = (value) => {
  const newValue = value;
  onPageChange(newValue);
};
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);
  const [isChildDropdownOpen, setIsChildDropdownOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const handleVideoClick = (videoId) => {
    const youtubeVideoUrl = "https://www.youtube.com/watch?v=" + videoId;
    window.location.href = youtubeVideoUrl;
  };
const toggleChildDropdown = () => {
  setIsChildDropdownOpen(!isChildDropdownOpen);
};
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (!/^\d+$/.test(inputValue)) {
        setError("");
        alert("Please enter a valid number.");
      } else {
        setError("");
        const keyForPageNumber = Object.keys(jsonData).find(
          (key) => jsonData[key] === Number(inputValue)
        );
        handleClick(Number(keyForPageNumber));
        console.log(`Input value on Enter: ${inputValue}`);
        // Add your logic here to handle the value
      }
    }
  };

  return (
    <div>
      <nav className="bg-slate-90 py-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col">
            <div
              className="flex-shrink-0"
              onClick={() => {
                if (dropdown2Open) setDropdown2Open(!dropdown2Open);
                if (dropdown3Open) setDropdown3Open(!dropdown3Open);
                if (dropdown4Open) setDropdown4Open(!dropdown4Open);
              }}
            >
              <h1 className="text-saffron text-4xl font-bold">
                कुंटे कुलवृत्तांत - वर्तक, महाजन, भागवत यांचे सहित (जमदग्नी
                गोत्री)
              </h1>
            </div>
            <div className="hidden md:block">
              <ul className="flex justify-evenly text-white">
                <li className="relative mx-8">
                  <button
                    className="hover:bg-gray-700 px-3 py-2 flex flex-row font-medium rounded-md focus:outline-none"
                    onClick={() => setDropdown1Open(!dropdown1Open)}
                  >
                    कुलवृत्तांत संबंधी{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 m-auto ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {dropdown1Open && (
                    <div className="absolute z-10 mt-2 py-2 w-96 bg-white rounded-md shadow-lg">
                      <button
                        onClick={() => {
                          handleClick(5);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto text-center px-4 py-2 text-gray-800"
                      >
                        मनोगत
                      </button>
                      <button
                        onClick={() => {
                          handleClick(6);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto text-center px-8 py-2 text-gray-800"
                      >
                        कुळवृत्तांत प्रस्तावना
                      </button>
                      <button
                        onClick={() => {
                          handleClick(31);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        ग्रंथाचा परिचय
                      </button>
                      <button
                        onClick={() => {
                          handleClick(39);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुलवृत्तांतची आवश्यकता
                      </button>
                      <button
                        onClick={() => {
                          handleClick(43);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे कुलवृत्तांत वाटचाल
                      </button>
                      <button
                        onClick={() => {
                          handleClick(53);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कोकणस्थ अगर चित्पावन मूळस्थान , वैशिष्ठ्ये व कामगिरी
                      </button>
                      <button
                        onClick={() => {
                          handleClick(63);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        चित्पावनांची धार्मिक परंपरा , गोत्रे , आडनावे व कुळाचार
                      </button>
                      <button
                        onClick={() => {
                          handleClick(67);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे कुळाची आद्य दैवते
                      </button>
                      <button
                        onClick={() => {
                          handleClick(89);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        केळशी गाव व वर्तक घराण्यासंबंधी माहिती
                      </button>
                      <button
                        onClick={() => {
                          handleClick(785);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        शुद्धीपत्र
                      </button>
                      <button
                        onClick={() => {
                          handleClick(1);
                          setDropdown1Open(!dropdown1Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        संपूर्ण कुलवृत्तांत
                      </button>
                      <button
                        onClick={toggleChildDropdown}
                        className="m-auto  flex flex-row px-4 py-2 text-gray-800"
                      >
                        नवीन माहिती नोंद /चुकीची दुरुस्ती
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 m-auto ml-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                      {isChildDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                          <ul className="py-2">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              >
                                चुकीची दुरुस्ती / माहितीमध्ये बदल करणे
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              >
                                नवीन माहिती समाविष्ट करणे - कुंटे, वर्तक, महाजन,
                                भागवत घराण्यात जन्मलेले पुरुष
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              >
                                नवीन माहिती समाविष्ट करणे - कुंटे, वर्तक, महाजन,
                                भागवत घराण्यात जन्मलेल्या स्त्रिया
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              >
                                नवीन माहिती समाविष्ट करणे - कुंटे, वर्तक, महाजन,
                                भागवत घराण्यात विवाह करून आलेल्या स्त्रिया
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </li>
                <li className="relative mx-8">
                  <button
                    className="hover:bg-gray-700 px-3 py-2 rounded-md flex flex-row focus:outline-none"
                    onClick={() => setDropdown2Open(!dropdown2Open)}
                  >
                    माहिती शोधणे
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 m-auto ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {dropdown2Open && (
                    <div className="absolute z-10 mt-2 py-2 w-96 bg-white rounded-md shadow-lg">
                      <button
                        onClick={() => {
                          handleClick(751);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे पुरुष सूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(771);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक पुरुष सूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(779);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत पुरुष सूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(693);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे-कुंटे महाजन मुली विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(697);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक मुली विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(699);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत मुली विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(701);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे-कुंटे महाजन मुले विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(705);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक मुले विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(707);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत मुले विवाहसंबंध
                      </button>
                      <button
                        onClick={() => {
                          handleClick(709);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे पत्नी नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(719);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक पत्नी नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(723);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत पत्नी नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(727);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे-कुंटे महाजन मुली नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(742);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक मुली नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(748);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत मुली नामसूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(683);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        कुंटे निवास ग्राम सूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(689);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        वर्तक निवास ग्राम सूची
                      </button>
                      <button
                        onClick={() => {
                          handleClick(691);
                          setDropdown2Open(!dropdown2Open);
                        }}
                        className="block m-auto px-4 py-2 text-gray-800"
                      >
                        भागवत निवास ग्राम सूची
                      </button>
                    </div>
                  )}
                </li>
                <li className="relative mx-8">
                  <button
                    className="hover:bg-gray-700 px-3 py-2 rounded-md flex flex-row focus:outline-none"
                    onClick={() => setDropdown3Open(!dropdown3Open)}
                  >
                    द्रुकश्राव्य
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 m-auto ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {dropdown3Open && (
                    <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      <button
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => handleVideoClick("lZoR9mYcWdY")}
                      >
                        केळशी महालक्ष्मी उत्सव आरंभीचा गोंधळ
                      </button>
                      <button
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => handleVideoClick("hBV1LtLO21g")}
                      >
                        केळशी महालक्ष्मी उत्सव आरती 
                      </button>
                      <button
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => handleVideoClick("nGUQ6mlyzps")}
                      >
                        केळशी महालक्ष्मी उत्सव समाप्तीचा गोंधळ
                      </button>
                    </div>
                  )}
                </li>
                <li className="relative mx-8">
                  <button
                    className="hover:bg-gray-700 px-3 py-2 rounded-md flex flex-row focus:outline-none"
                    onClick={() => setDropdown4Open(!dropdown4Open)}
                  >
                    संपर्क आणि अभिप्राय
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 m-auto ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {dropdown4Open && (
                    <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      <button className="block px-4 py-2 text-gray-800">
                        आपल्या अभिप्राय व सूचना kuntekulvruttant@gmail.com येथे पाठवाव्यात
                      </button>
                    </div>
                  )}
                </li>
                <li className="relative mx-8">
                  <input
                    type="text"
                    placeholder="कुलवृत्तांतमधील क्रमांक "
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-black text-white m-auto w-48 p-2 rounded-md"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
