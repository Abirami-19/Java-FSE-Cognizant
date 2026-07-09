private static void testQueries() {

    LOGGER.info("All Countries");
    LOGGER.debug("{}", countryService.getAllCountries());

    LOGGER.info("Country Count");
    LOGGER.debug("{}", countryService.getCountryCount());

    LOGGER.info("Native Query");
    LOGGER.debug("{}", countryService.getCountriesNative());

}