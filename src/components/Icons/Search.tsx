import { ChangeEvent } from 'react'
import { optionType } from '../../types'

type Props = {
  term: string
  options: []
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <section className="bg-black bg-opacity-25 backdrop:blur-lg rounded drop-shadow-lg w-full md:max-w-[500px] h-full lg:max-h-[500px] ">
      <h1 className=" flex justify-center  font-medium text-[45px] mt-[50px] text-fuchsia-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        Weather app
      </h1>
      <h2 className="flex justify-center font-normal text-fuchsia-100 text-[20px]">
        Write the name of country or city below:
      </h2>
      <div className="flex justify-center mt-[50px] ">
        <input
          onChange={onInputChange}
          type="text"
          value={term}
          className=" p-2 rounded-l-[4px] w-2/4 outline-none text-white bg-gradient-to-br from-indigo-400  to-emerald-400  "
        ></input>
        <ul className="absolute top-[237px] left-[90px]  bg-white rounded b-md">
          {options.map((option: optionType, index: number) => (
            <li key={option.name + '-' + index}>
              <button
                onClick={() => onOptionSelect(option)}
                className="bg-white hover:bg-zinc-800 ease-in-out duration-200 w-full hover:text-yellow-50 px-2 py-1"
              >
                {option.name} , {option.country}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onSubmit}
          className=" bg-gradient-to-br from-indigo-500 via- to-emerald-500  rounded-r-[6px]  bg-opacity-25 text-[20px] text-white "
        >
          Search
        </button>
      </div>
    </section>
  )
}

export default Search
