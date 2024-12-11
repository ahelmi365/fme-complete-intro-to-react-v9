const useCurrencyINTL = (locale = "en-US", currency = "USD") => {
  const currencyINTL = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return currencyINTL;
};

export default useCurrencyINTL;
