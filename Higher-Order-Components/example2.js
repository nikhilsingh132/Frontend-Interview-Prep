// Example: 

// DogImages Component
import withLoader from "./withLoader";

function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

// export default withLoader(
//   DogImages,
//   "https://dog.ceo/api/breed/labrador/images/random/6"
// );



// withLoader Component
export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}

// Here we are reusing the logic of withLoader in multiple components.
// This is the main benefit of Higher Order Components.
// We are passing DogImages component as an argument to the higher order component.
// After manipulating the logic in withLoader, we are returning the DogImages component.
// Now DogImages component can be used in multiple components. Making it reusable.