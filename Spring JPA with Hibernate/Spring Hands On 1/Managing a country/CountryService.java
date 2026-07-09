@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Find country by code
    public Country findCountryByCode(String code) {
        return null;
    }

    // Add new country
    public void addCountry(Country country) {

    }

    // Update country
    public void updateCountry(Country country) {

    }

    // Delete country
    public void deleteCountry(String code) {

    }

    // Search country by partial name
    public List<Country> searchCountry(String name) {
        return null;
    }
}