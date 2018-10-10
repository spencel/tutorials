from pyexcel_ods import save_data
from collections import OrderedDict

data = OrderedDict() # from collections import OrderedDict
data.update({"Sheet 1": [[1, 2, 3], [4, 5, 6]]})
data.update({"Sheet 2": [["row 1", "row 2", "row 3"]]})
save_data("your_file.ods", data)