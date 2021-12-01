using MediatR;
using ReactShop.Core.Entities;

namespace ReactShop.Application.Features.Categories.CreateCategory
{
    public class CreateCategoryCommand : IRequest<Category>
    {
        public string Name { get; set; }
    }
}