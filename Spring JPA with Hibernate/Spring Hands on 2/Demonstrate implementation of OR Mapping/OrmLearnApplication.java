private static void testQueryMethods() {

    LOGGER.info("Countries containing 'Uni'");

    LOGGER.debug("{}", countryService.searchCountry("Uni"));

    LOGGER.info("Countries starting with 'A'");

    LOGGER.debug("{}", countryService.searchCountryStartingWith("A"));

    LOGGER.info("Sorted Countries");

    LOGGER.debug("{}", countryService.sortCountries());

    LOGGER.info("Top Country");

    LOGGER.debug("{}", countryService.getTopCountry());

}