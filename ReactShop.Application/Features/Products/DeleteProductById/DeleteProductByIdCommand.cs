using MediatR;

namespace ReactShop.Application.Features.Products.DeleteProductById
{
    public class DeleteProductByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        
    }
}
