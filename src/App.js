import {useForm} from "react-hook-form";

export default function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data)
    

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="FirsName" 
             {...register('FirstName',
             {required: true,
              minLength: 0,
              maxLength: 20},
              {pattern : /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="LastName" {...register('LastName',
             {required: true,
              minLength: 0,
              maxLength: 20},
              {pattern : /^[A-Za-z]+$/i})}/>
       <input type="number" placeholder="Age"
             {...register("Age", { min: 16, max: 99 })} />
        <select {...register("Gender", { required: true })}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      <button type="submit">Submit</button>
    </form>
  )
}