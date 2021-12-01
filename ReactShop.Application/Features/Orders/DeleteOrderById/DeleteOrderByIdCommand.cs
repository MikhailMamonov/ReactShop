using MediatR;

namespace ReactShop.Application.Features.Orders.DeleteOrderById
{
    public class DeleteOrderByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}
