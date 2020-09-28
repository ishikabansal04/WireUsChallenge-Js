var headphones={brand:'Zebronics',
                 color:'blue',
                  price: '650',
                   availability:'easy',
                    message: function(){
                        var details= this.brand + this.color + this.price + this.availability;
                        return details;
                    }
                };

console.log(headphones.message());
