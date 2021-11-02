using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactShop.Core.Entities;
using ReactShop.Core.Repositories;

namespace ReactShop.Application.Features.Orders.GetAllOrders
{
    public class GetAllOrdersQueryHandler : IRequestHandler<GetAllOrdersQuery, IEnumerable<Order>>
    {
        private readonly IOrdersRepository _categoryRepository;
        public GetAllOrdersQueryHandler(IOrdersRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public async Task<IEnumerable<Order>> Handle(GetAllOrdersQuery query, CancellationToken cancellationToken)
        {
            var categoryList = await _categoryRepository.GetAllAsync();
            if (categoryList == null)
            {
                return null;
            }
            return categoryList;
        }
    }
}
