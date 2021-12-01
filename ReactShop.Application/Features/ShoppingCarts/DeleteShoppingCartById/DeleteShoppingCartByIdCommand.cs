using MediatR;

namespace ReactShop.Application.Features.ShoppingCarts.DeleteShoppingCartById
{
    public class DeleteShoppingCartByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        
    }
}
