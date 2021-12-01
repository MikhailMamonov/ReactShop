using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Products.CreateProduct
{
    public class CreateProductCommand : IRequest<Product>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
        public string Image { get; set; }
    }
}
