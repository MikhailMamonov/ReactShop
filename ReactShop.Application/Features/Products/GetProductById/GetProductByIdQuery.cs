using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Products.GetProductById
{
    public class GetProductByIdQuery : IRequest<Product>
    {
        public int Id { get; set; }
    }
}
