# Making CSS from good to great: the power of Subgrid

*For the Mozilla Developer Roadshow Asia 2019. This is sort of a transcript and notes for the talk.*

## Demystify Grid with DevTools

- 不管你是第一次嘗試用Grid做佈局，或則是你已經把Grid部署到生產環境了，開發過程真的少不了Grid inspector這個工具
- 之前提過了，最基本的格線佈局是在父元素上設定軌道的尺寸
- 我蠻喜歡這套語法的，因為它相當視覺性，`grid-template-columns`的三個屬性值代表網格的三個列，`grid-template-rows`的兩個屬性值代表兩個行。
- 瀏覽器會按順序把子元素默認排列在網格中，可是這並不新奇嘛，瀏覽器一向來都有按順序排列元素的功能

---

- Grid最大的賣點則是讓我們輕鬆的把格線單元佈置在網格中的任何位置，就好像把棋子擺在棋盤上似的
- 這個例子是個用存CSS做出來的圍棋板，初學者用的，所以只有九個行，九個列
- 但是這也算是比較大型的網格嘛，所以要佈置棋子時，如果沒有DevTools網格覆蓋的格線數字，要我坐在哪裡算線條，簡直是浪費我的青春呀
- 調整棋子的位置就要用上`grid-row`以及`grid-column`這兩個屬性，有點類似高中數學課學習的x和y坐標

---

- 另一個有趣的功能則是`grid-template-areas`
- 它應許我們命名格線區域，而我們可以利用區域名稱來佈置子元素
- 用引號括起來的每一行代表了網格的一行
- 引號內的值代表網格中的列
- 這語法的好處在於當你在設計擁有許多元素的大型的頁面時，假如需要調整子元素的位置，尤其是做響應式設計時，根本不需要動到子元素的CSS
- 如果我要把壽司的區域改小，調`grid-template-areas`就可以了

---

- 一個較新的功能則是Grid行與列的的動畫
- 其實規範很早就有了，但是瀏覽器實現規範也沒這麼快啦
- Firefox則是在v66開始支持軌道動畫的
- 起初看到這個功能時，我還以為子元素在跨越軌道，但是用DevTools檢查後才發現事實並非如此 *(trigger grid overlay for grid5.board)*
- 我們只能把動畫設在行與列的尺寸上，這個棋盤是假象呀，使用CSS背景做出來的假象
- 但是如果沒有DevTools，我很難想像出這份動畫是怎麼實現的

---

- when we apply a `display: grid` onto an element, it creates a grid formatting context in which its child elements participates in
- this allows the grid items to be laid out onto the defined grid
- however, the grid formatting context only applies to child elements, and not grandchild elements and beyond
- there are quite a number of use-cases where we do want grand-child elements and deeper to line up with the outermost grid. 
- this capability had been written into the specification early on because it was important
- but due to the complexity involved, it was deferred to level 2 so more time could be spent making sure the specification was robust

## Demystify Subgrid with DevTools

- 我們可以讓嵌套的網格只對齊父網格的單一維度，怎麼說呢，就是讓內容只對齊行，或只對齊列
- 把`subgrid`關鍵字設在`grid-template-rows`或`grid-template-columns`屬性上
- Subgrid會有自己的的格線編號，所以設Subgrid本身的位置用的數值指標跟Subgrid內容的數值指標不同
- 通過DevTools的Grid overlay可以看得出來該用哪一套
- 我們還可以換顏色，如果你不喜歡紫色，就換成你喜歡的顏色好了

---

- 格線間距也會被嵌套的網格繼承
- 但是你可以覆寫間距的尺寸
- 間距尺寸會影響子元素的寬度，雖然內容都對齊了，但是應為間距比較大，subgrid的子元素寬度比較小

---

- any margins, borders and paddings applied to each edge of the subgrid will “accumulate” 累積 as you nest more subgrids
- here we have a grid, a subgrid and an additional nested subgrid, so 3 layers
- the outermost grid also has grid gap applied
- item 2 and item 3 are grandchildren of the outermost grid
- item 2 is aligned according to the outermost grid's columns but its size has been reduced by the margin, border and paddings of its parent and grandparent grid
- item 3 does not have this issue because it is not at an edge

---

- because subgrids follow the sizing of its parent, it will not generate implicit grid tracks for extra items
- if you make a subgrid item span larger than the parent's tracks, the browser will clamp to parent track's sizing
- item 2 has it's `grid-column` value set to `span 3` so it is supposed to span 3 column tracks but it cannot, so it is clamped at 2
- even if I change the value to 4, 5 and beyond, its size will max out at 2 columns
- if there are additional items in the subgrid than there are grid cells for, the items will all stack up in the last track
- if i reduce the size of subgrid from 3 columns to 2 columns, you can see that item E and F end up all stacked in the bottom left corner

---

- practical use cases for subgrid include inline labels for form elements
- semantically, a form is made up of a list of input fields, and these fields will have a corresponding label element
- previously, if we wanted the labels to be the width of the longest label, we could not maintain this markup structure
- but now we can, because within label field within the list item knows about the grid structure of the parent grid, which is the unordered list

---

- one way to make sure your element spans all the rows or columns of your grid is to use `1 / -1` as the track size
- the limitation is, you cannot do this if the number of rows or columns is not explicitly stated
- when we don't know how much content a grid would contain, we usually just let the browser figure out the number of tracks automatically without specifying a number
- but if we do that, we cannot use `1 / -1`
- subgrid can resolve this problem because we can put in unknown items into a subgrid which aligns with the rest of the parent layout, which can have a known grid structure

---

- the main use-case for subgrid is aligning content within grid items across different grid items
- in this example, the social media links along the bottom of the card are of unknown lengths
- with subgrid, we can ensure that the grid track always is the `max-content` length, hence the fields will be aligned across cards
- this will work for cards with headers and footers as well, in that case, the dimension will be columns instead of rows