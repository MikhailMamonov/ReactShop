using MediatR;

namespace ReactShop.Application.Features.Categories.DeleteCategoryById
{
    public class DeleteCategoryByIdCommand : IRequest<int>
    {
        public int Id { get; set; }
        
    }
}
