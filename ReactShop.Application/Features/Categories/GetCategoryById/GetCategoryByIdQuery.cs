using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Categories.GetCategoryById
{
    public class GetCategoryByIdQuery : IRequest<Category>
    {
        public int Id { get; set; }
        
    }

    
}
