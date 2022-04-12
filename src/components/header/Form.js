import React from 'react'
import { FormContainer, FoodInput, Button, Select } from "./style";


const Form = ({setQuery, getData, mealTypes, setMeal}) => {

    const handleSubmit = (e)=>{
      e.preventDefault();
      getData();
    }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* arama yapılacak ürünün yazıldığı input */}
      <Button
        type="submit"

        // onClick={getData} yazarsak 2 kere veri getirir. zaten bu buton submit işlemi yapacak ve form un onsubmit ini tetikleyecek
      >
        Search
      </Button>
      {/* ya butona tıklayınca getdata çalıştırsın ya form u handlesubmit e yolla, butonu handlesubmit e yollasanda olur */}
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {/* onChange ile setMeal e attım option la browser da göstereceğiz */}
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  )
}

export default Form