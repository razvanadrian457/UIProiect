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
                return `
                <div id="food" class="shop-items">
                <div class="shop-item">
                            <span class="shop-item-title">${item.name}</span>
                           <img class="resize" src=${item.imagePath}>
                            <div class="shop-item-details">
                                <span class="shop-item-price">${item.price}$</span>
                                <button class="btn btn-primary shop-item-button" role="button">Add To Cart</button>
                            </div>
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

    display: function(items) {
            window.persons = items;
            var rows = '';

            items.forEach(item => rows += Shop.getRow(item));
            $('#food').html(rows);


            $(".shop-item-button").click(addToCartClicked);
        },

};

Shop.load();
