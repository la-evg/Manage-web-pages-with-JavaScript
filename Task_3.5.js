let photo = document.querySelector("#photo")

imgTag = document.createElement("img")
imgTag.src = photo.innerText
imgTag.style.height = '100px'
imgTag.style.width = '100px'
photo.innerText = ""
photo.append(imgTag)