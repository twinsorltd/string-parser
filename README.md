# String Parser

This simple utility is used to parse warnings from Amazon Vendor Central and get only the relevant part out of it
## Sample input
```
There is a conflict with your submission and another ASIN “B087TR7T44” in our catalogue. Change the product attribute to “Cranberry” or contact us to change the brand value if you are the brand owner.
There is a conflict with your submission and another ASIN “B09XJ1LL5G” in our catalogue. Change the product attribute to “Total Shiny Black” or contact us to change the brand value if you are the brand owner.
There is a conflict with your submission and another ASIN “B087C9TNTW” in our catalogue. Change the product attribute to “Multicoloured (Multicoloured)” or contact us to change the brand value if you are the brand owner.
```

## Matching output
```
Cranberry
Total Shiny Black
Multicoloured (Multicoloured)
```

## Live Demo
Click [here](https://twinsorltd.github.io/string-parser/) to use the utility