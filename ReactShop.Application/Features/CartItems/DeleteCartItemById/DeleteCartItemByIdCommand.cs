using MediatR;

namespace ReactShop.Application.Features.CartItems.DeleteCartItemById
{
    public class DeleteCartItemByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        
    }
}
