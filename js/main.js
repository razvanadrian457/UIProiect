var editId;

var API_URL =
{
    CREATE: 'http://localhost:8010/product',
    READ: 'http://localhost:8010/product',
    UPDATE: 'http://localhost:8010/shop/1',
    DELETE: './api/delete.json'
};

window.Shop =
{
    getRow: function(item)
    {
        // ES6 string template
                return `
                <div class="shop-item">
                            <span class="shop-item-title">${item.name}</span>
                           <a href="food1.html" ><img class="resize" src=${item.imagePath}></a>
                            <div class="shop-item-details">
                                <span class="shop-item-price">${item.price}$</span>
                                <button class="btn btn-primary shop-item-button" role="button">Add To Cart</button>
                            </div>
                            </div>
                `;
    },

    load: function()
    {
    console.log('loading...');
        $.ajax({
            url: API_URL.READ,
            method:"GET"
        }).done(function(items)
        {
            console.info('done:', items);
            Shop.display(items);
        });
    },

    getActionRow: function()
    {
        return`
        `
    },

//    delete: function(id)
//    {
//        $.ajax({
//            url: API_URL_DELETE,
//            method: "POST",
//            data:
//            {
//                id: id;
//            }
//        }).done(function(response)
//        {
//            if(response.success)
//            {
//                Shop.load();
//            }
//        });
//    },

//    add: function(item)
//    {
//        console.log(item);
//        #.ajax({
//            url:API_URL.CREATE,
//            headers:
//            {
//                "Content-Type": "application/json"
//            },
//            method: "POST",
//            data: JSON.stringify(item, null, 2)
//         }).done(function (response)
//         {
//                     if (response.success)
//                     {
//                        Shop .load();
//                     }
//                 });
//    },
//
//    save: function(item)
//    {
//        console.log(item);
//        #.ajax({
//            url: API_URL.UPDATE+item.id,
//            method: "PUT",
//            headers:
//            {
//                "Content-Type": "application/json"
//            },
//            data: JSON.stringify(item, null, 2)
//        }).done(function(response)
//        {
//            if(response.success)
//            {
//                editId = '';
//                Shop.load();
//            }
//        });
//    },
//
//    bindEvents: function()
//    {
//
//    },

    display: function(items) {
            window.persons = items;
            var rows = '';

            // ES6 function systax inside forEach
            items.forEach(item => rows += Shop.getRow(item));
            $('#food').html(rows);


            $(".shop-item-button").click(addToCartClicked    );
        }



};

Shop.load();
