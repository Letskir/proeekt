glob_div=document.querySelector(".global_div")
scrolldiv=glob_div.querySelector('.scroll_div')
btns_nav=scrolldiv.querySelector("nav")
btn1=btns_nav.querySelector(".nav_href1")

text=document.querySelector(".text")
text_vse="Сложность отвечает за то, насколько испытывающим будет игровой процесс. В Террарии присутствуют отдельные сложности для персонажей и миров. У миров есть 4 сложности: путешествие, нормальная, эксперт и мастер. Путешествие это сложность на которой можно самому всё настроить, а эксперт и мастер значительно усложняют игру, но взамен из врагов выпадает больше вещей, и шанс выпадения редких вещей увеличен, а также из персонажа выпадают монеты. Сложности игрока это путешествие(для миров путешествия), нормальная, средняя(с игрока выпадают вещи при смерти) и сложный(после смерти игрок не может взаимодействовать с миром и только наблюдать."

btn1.addEventListener("click", text.innerHTML==text_vse)
