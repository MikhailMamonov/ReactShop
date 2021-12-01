using System.Collections.Generic;
using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Categories.GetAllCategories
{
    public class GetAllCategoriesQuery : IRequest<IEnumerable<Category>>
    {
        
    }
}
