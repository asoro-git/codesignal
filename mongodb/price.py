import datetime
import numpy as np


def build_price_converter(sold_price_data, base_date=None):
    """
    Builds a converter function given monthly sold price data.

    :param sold_price_data: Dictionary mapping datetime.date to sold price.
           Example: {datetime.date(2021, 1, 1): 500000, datetime.date(2021, 2, 1): 505000, ...}
    :param base_date: (Optional) datetime.date to use as the base. If not provided, the earliest date in sold_price_data is used.
    :return: A function that converts a price from an input date to its equivalent at a target date.

    The converter calculates an index series by setting the sold price of the base date as 100.
    Each month’s index is computed as: (sold price / base price) * 100.
    """
    # Sort the dates and choose a base date if not provided.
    dates = sorted(sold_price_data.keys())
    if base_date is None:
        base_date = dates[0]

    # Ensure the base_date exists in the data.
    if base_date not in sold_price_data:
        raise ValueError("base_date must be one of the dates in sold_price_data")

    base_price = sold_price_data[base_date]

    # Create an index series from the sold prices.
    index_data = {d: (sold_price_data[d] / base_price) * 100 for d in dates}

    # Prepare lists for interpolation.
    date_ordinals = [d.toordinal() for d in dates]
    indexes = [index_data[d] for d in dates]

    def convert_price(price, input_date, target_date):
        """
        Converts the given price from input_date to its equivalent at target_date based on sold price growth.

        :param price: Original property price.
        :param input_date: datetime.date when the price was observed.
        :param target_date: datetime.date for the desired conversion.
        :return: Adjusted price.
        """
        input_index = np.interp(input_date.toordinal(), date_ordinals, indexes)
        target_index = np.interp(target_date.toordinal(), date_ordinals, indexes)
        conversion_factor = target_index / input_index
        return price * conversion_factor

    return convert_price


# --- Example Usage ---
# Replace these with your actual sold price data for each month.
sold_price_data = {
    datetime.date(2021, 1, 1): 500000,
    datetime.date(2021, 2, 1): 505000,
    datetime.date(2021, 3, 1): 510000,
    datetime.date(2021, 4, 1): 515000,
    datetime.date(2021, 5, 1): 520000,
    datetime.date(2021, 6, 1): 525000,
    # ... fill in more months until 2025 ...
    datetime.date(2025, 12, 1): 750000,
}

# Create the converter function.
convert_price = build_price_converter(sold_price_data)

# For example, convert a property price from June 2021 to its 2025 equivalent.
price_2021 = 500000
input_date = datetime.date(2021, 6, 1)
target_date = datetime.date(2025, 6, 1)
converted_price = convert_price(price_2021, input_date, target_date)

print(f"Converted price: ${converted_price:,.2f}")
