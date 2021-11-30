using FluentValidation;

namespace ReactShop.Application.Features.ShoppingCarts.UpdateShoppingCart
{
    public class UpdateShoppingCartCommandValidator : AbstractValidator<UpdateShoppingCartCommand>
    {
        public UpdateShoppingCartCommandValidator()
        {
            RuleFor(c => c.ShoppingCartId).NotEmpty().WithMessage("Please specify CartId");
            RuleFor(c => c.ProductId).NotEmpty().WithMessage("Please specify ProductId");
        }
    }
}