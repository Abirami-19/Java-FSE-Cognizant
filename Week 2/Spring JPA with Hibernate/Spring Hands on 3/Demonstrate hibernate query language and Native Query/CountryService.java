@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.getAllCountries();
    }

    public Country getCountry(String code) {
        return countryRepository.getCountry(code);
    }

    public long getCountryCount() {
        return countryRepository.getCountryCount();
    }

    public List<Country> getCountriesNative() {
        return countryRepository.getCountriesNative();
    }

    public Country getCountryNative(String code) {
        return countryRepository.getCountryNative(code);
    }
}