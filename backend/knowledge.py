import os
from bs4 import BeautifulSoup

def load_school_content():

    website_text = ""

    root_folder = ".."

    for file in os.listdir(root_folder):

        if file.endswith(".html"):
            # print("Reading:", file)

            try:

                with open(
                    os.path.join(root_folder, file),
                    "r",
                    encoding="utf-8"
                ) as f:

                    html = f.read()

                    soup = BeautifulSoup(
                        html,
                        "html.parser"
                    )

                    text = soup.get_text(
                        separator=" ",
                        strip=True
                    )

                    website_text += (
                        f"\n\nFILE: {file}\n{text}"
                    )

            except Exception as e:

                print(e)

    return website_text