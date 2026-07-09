private static void testFindCountry() {

    LOGGER.info("Start");

    try {

        Country country =
                countryService.findCountryByCode("IN");

        LOGGER.debug("Country: {}", country);

    } catch (CountryNotFoundException e) {

        LOGGER.error(e.getMessage());

    }

    LOGGER.info("End");
}