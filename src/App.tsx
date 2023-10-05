import Search from './components/Icons/Search'
import useForecast from './hooks/useForecast'
import Forecast from './components/Forecast'

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast()
  return (
    <main className="font-poppins flex justify-center items-center bg-gradient-to-br from-indigo-500 to-emerald-500 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
